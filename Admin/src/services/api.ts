
import axios from "axios";

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: "admin" | "superadmin";
  status: "approved" | "pending" | "rejected";
}

export interface LoginResponse {
  message: string;
  token: string;
  user: AdminUser;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  status: "pending";
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginAdmin = async (
  identifier: string,
  password: string
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(
    "/auth/login",
    {
      identifier,
      password,
    }
  );

  return response.data;
};

export const registerAdmin = async (
  data: RegisterPayload
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>(
    "/auth/register",
    {
      username: data.username,
      email: data.email,
      password: data.password,
    }
  );

  return response.data;
};


export interface SuperAdminAccount {
  _id: string;
  username: string;
  email: string;
  role: "admin";
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}

export const superAdminApi = {
  // Mengambil semua akun Admin
  async getAdmins(): Promise<{ users: SuperAdminAccount[] }> {
    const token = localStorage.getItem("authToken");

    const response = await api.get("/superadmin/admins", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },

  // Approve atau Reject akun Admin
  async updateStatus(
    id: string,
    status: "approved" | "rejected"
  ) {
    const token = localStorage.getItem("authToken");

    const response = await api.patch(
      `/superadmin/registrations/${id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  },

  // Menghapus akun Admin
  async deleteAdmin(id: string) {
    const token = localStorage.getItem("authToken");

    const response = await api.delete(
      `/superadmin/admins/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  },
};

export default api;
