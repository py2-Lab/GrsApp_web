
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ShieldCheck,
  RefreshCw,
  Check,
  X,
  Trash2,
  LogOut,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  LoaderCircle,
} from "lucide-react";

import {
  superAdminApi,
  type SuperAdminAccount,
} from "../services/api";

import { superAdminStyles } from "../styles/superAdmin";

type FilterStatus = "all" | "pending" | "approved" | "rejected";

export default function SuperAdmin() {
  const [admins, setAdmins] = useState<SuperAdminAccount[]>([]);
  const [filter, setFilter] = useState<FilterStatus>("pending");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  // Mengambil seluruh data Admin
  const loadAdmins = useCallback(async (refresh = false) => {
    try {
      setMessage("");

      if (refresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const token = localStorage.getItem("authToken");

      if (!token) {
        localStorage.removeItem("authUser");
        window.location.replace("/login");
        return;
      }

      const result = await superAdminApi.getAdmins();

      setAdmins(result.users);
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Gagal mengambil data Admin."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
  const timer = setTimeout(() => {
    loadAdmins();
  }, 0);

  return () => clearTimeout(timer);
}, [loadAdmins]);

  // Approve / Reject
  const updateStatus = async (
    admin: SuperAdminAccount,
    status: "approved" | "rejected"
  ) => {
    const action = status === "approved" ? "menyetujui" : "menolak";

    const confirmed = window.confirm(
      `Yakin ingin ${action} akun ${admin.username}?`
    );

    if (!confirmed) return;

    try {
      setProcessingId(admin._id);
      setMessage("");

      await superAdminApi.updateStatus(admin._id, status);

      await loadAdmins(true);
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Gagal memperbarui status Admin."
      );
    } finally {
      setProcessingId(null);
    }
  };

  // Delete Admin
  const deleteAdmin = async (admin: SuperAdminAccount) => {
    const confirmed = window.confirm(
      `Akun ${admin.username} akan dihapus permanen. Lanjutkan?`
    );

    if (!confirmed) return;

    try {
      setProcessingId(admin._id);
      setMessage("");

      await superAdminApi.deleteAdmin(admin._id);

      await loadAdmins(true);
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Gagal menghapus akun Admin."
      );
    } finally {
      setProcessingId(null);
    }
  };

  // Logout
  const handleLogout = () => {
    const confirmed = window.confirm(
      "Yakin ingin keluar dari akun Super Admin?"
    );

    if (!confirmed) return;

    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");

    window.location.replace("/login");
  };

  // Filter data
  const filteredAdmins = useMemo(() => {
    if (filter === "all") return admins;

    return admins.filter((admin) => admin.status === filter);
  }, [admins, filter]);

  // Statistik
  const counts = useMemo(() => ({
    all: admins.length,
    pending: admins.filter((item) => item.status === "pending").length,
    approved: admins.filter((item) => item.status === "approved").length,
    rejected: admins.filter((item) => item.status === "rejected").length,
  }), [admins]);

  return (
    <>
      <style>{superAdminStyles}</style>

      <main className="superadmin-page">
        <div className="superadmin-container">

          {/* HEADER */}
          <header className="superadmin-header">
            <div className="superadmin-heading">
              <div className="superadmin-icon">
                <ShieldCheck size={26} />
              </div>

              <div>
                <h1>Super Admin</h1>
                <p>Manajemen akun Admin GrsApp</p>
              </div>
            </div>

            <div className="superadmin-header-actions">
              <button
                className="superadmin-icon-button"
                onClick={() => loadAdmins(true)}
                disabled={refreshing}
                title="Refresh data"
              >
                <RefreshCw
                  size={18}
                  className={refreshing ? "animate-spin" : ""}
                />
              </button>

              <button
                className="superadmin-icon-button logout"
                onClick={handleLogout}
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          </header>

          {/* ERROR MESSAGE */}
          {message && (
            <div className="superadmin-message" role="alert">
              {message}
            </div>
          )}

          {/* SUMMARY */}
          <section className="superadmin-summary">

            <div className="superadmin-stat">
              <Users size={20} color="#56836A" />
              <span className="superadmin-stat-number">
                {counts.all}
              </span>
              <span className="superadmin-stat-label">
                Semua Admin
              </span>
            </div>

            <div className="superadmin-stat pending">
              <Clock size={20} color="#C58B22" />
              <span className="superadmin-stat-number">
                {counts.pending}
              </span>
              <span className="superadmin-stat-label">
                Pending
              </span>
            </div>

            <div className="superadmin-stat approved">
              <CheckCircle size={20} color="#238B57" />
              <span className="superadmin-stat-number">
                {counts.approved}
              </span>
              <span className="superadmin-stat-label">
                Approved
              </span>
            </div>

            <div className="superadmin-stat rejected">
              <XCircle size={20} color="#D64B4B" />
              <span className="superadmin-stat-number">
                {counts.rejected}
              </span>
              <span className="superadmin-stat-label">
                Rejected
              </span>
            </div>

          </section>

          {/* SECTION */}
          <section className="superadmin-section">
            <h2>Daftar Pendaftaran</h2>
            <p>Kelola akun Admin yang terdaftar di GrsApp</p>
          </section>

          {/* FILTER */}
          <div className="superadmin-filters">
            {(["pending", "approved", "rejected", "all"] as FilterStatus[]).map(
              (status) => (
                <button
                  key={status}
                  className={`superadmin-filter ${
                    filter === status ? "active" : ""
                  }`}
                  onClick={() => setFilter(status)}
                >
                  {status === "all" ? "Semua" : status}
                </button>
              )
            )}
          </div>

          {/* ADMIN LIST */}
          {loading ? (
            <div className="superadmin-loading">
              <LoaderCircle
                size={27}
                className="animate-spin"
                style={{ margin: "0 auto 12px" }}
              />
              Memuat data Admin...
            </div>
          ) : (
            <div className="superadmin-list">

              {filteredAdmins.length === 0 ? (
                <div className="superadmin-empty">
                  <Users size={36} />

                  <h3>Belum ada akun</h3>

                  <p>
                    Tidak ada akun Admin pada kategori ini.
                  </p>
                </div>
              ) : (
                filteredAdmins.map((admin) => {
                  const busy = processingId === admin._id;

                  return (
                    <article
                      key={admin._id}
                      className="superadmin-card"
                    >
                      <div className="superadmin-user">

                        <div className="superadmin-avatar">
                          {admin.username.charAt(0).toUpperCase()}
                        </div>

                        <div className="superadmin-user-info">
                          <h3>{admin.username}</h3>
                          <p>{admin.email}</p>

                          <div className="superadmin-date">
                            Terdaftar:{" "}
                            {new Date(admin.createdAt).toLocaleDateString(
                              "id-ID",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </div>
                        </div>

                        <span
                          className={`superadmin-badge ${admin.status}`}
                        >
                          {admin.status.toUpperCase()}
                        </span>

                      </div>

                      {/* ACTIONS */}
                      <div className="superadmin-actions">

                        {admin.status === "pending" && (
                          <>
                            <button
                              className="superadmin-action approve"
                              onClick={() => updateStatus(admin, "approved")}
                              disabled={busy || processingId !== null}
                            >
                              <Check size={15} />
                              Approve
                            </button>

                            <button
                              className="superadmin-action reject"
                              onClick={() => updateStatus(admin, "rejected")}
                              disabled={busy || processingId !== null}
                            >
                              <X size={15} />
                              Deny
                            </button>
                          </>
                        )}

                        <button
                          className="superadmin-action delete"
                          onClick={() => deleteAdmin(admin)}
                          disabled={processingId !== null}
                        >
                          {busy ? (
                            <LoaderCircle size={15} className="animate-spin" />
                          ) : (
                            <Trash2 size={15} />
                          )}

                          {busy ? "Memproses..." : "Hapus"}
                        </button>

                      </div>
                    </article>
                  );
                })
              )}

            </div>
          )}

        </div>
      </main>
    </>
  );
}
