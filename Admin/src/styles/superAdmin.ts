
export const superAdminStyles = `
.superadmin-page {
  min-height: 100vh;
  background: #F5F8F6;
  padding: 42px 5%;
  color: #203D2C;
  font-family: inherit;
}

.superadmin-container {
  max-width: 1250px;
  margin: 0 auto;
}

.superadmin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
}

.superadmin-heading {
  display: flex;
  align-items: center;
  gap: 15px;
}

.superadmin-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: #238B57;
  color: white;
}

.superadmin-heading h1 {
  font-size: 25px;
  font-weight: 800;
  color: #183D2A;
  margin: 0;
}

.superadmin-heading p {
  font-size: 13px;
  color: #829187;
  margin-top: 5px;
}

.superadmin-header-actions {
  display: flex;
  gap: 10px;
}

.superadmin-icon-button {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #E4EBE6;
  border-radius: 12px;
  cursor: pointer;
  color: #267A4B;
  transition: .2s;
}

.superadmin-icon-button:hover {
  background: #E7F3EB;
}

.superadmin-icon-button.logout {
  color: #D64B4B;
}

.superadmin-summary {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 35px;
}

.superadmin-stat {
  background: white;
  border: 1px solid #E7EEE9;
  border-radius: 16px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.superadmin-stat-label {
  color: #829187;
  font-size: 13px;
}

.superadmin-stat-number {
  font-size: 29px;
  font-weight: 800;
  color: #284D37;
}

.superadmin-stat.pending .superadmin-stat-number {
  color: #C58B22;
}

.superadmin-stat.approved .superadmin-stat-number {
  color: #238B57;
}

.superadmin-stat.rejected .superadmin-stat-number {
  color: #D64B4B;
}

.superadmin-section {
  margin-bottom: 18px;
}

.superadmin-section h2 {
  font-size: 19px;
  font-weight: 800;
  margin: 0 0 6px;
}

.superadmin-section p {
  color: #87948B;
  font-size: 13px;
}

.superadmin-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin: 20px 0;
}

.superadmin-filter {
  border: none;
  border-radius: 10px;
  padding: 10px 19px;
  background: #E9EFEB;
  color: #64756A;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  text-transform: capitalize;
  transition: .2s;
}

.superadmin-filter.active {
  background: #238B57;
  color: white;
}

.superadmin-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px;
}

.superadmin-card {
  background: white;
  border: 1px solid #E7EEE9;
  border-radius: 16px;
  padding: 20px;
  transition: .2s;
}

.superadmin-card:hover {
  border-color: #BBD9C6;
  box-shadow: 0 8px 25px rgba(35, 139, 87, .06);
}

.superadmin-user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.superadmin-avatar {
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  background: #E2F1E7;
  color: #238B57;
  font-size: 18px;
  font-weight: 800;
}

.superadmin-user-info {
  flex: 1;
  min-width: 0;
}

.superadmin-user-info h3 {
  font-size: 14px;
  font-weight: 800;
  margin: 0;
}

.superadmin-user-info p {
  font-size: 12px;
  color: #75847A;
  margin-top: 5px;
  overflow-wrap: anywhere;
}

.superadmin-date {
  font-size: 11px;
  color: #9AA59E;
  margin-top: 6px;
}

.superadmin-badge {
  padding: 6px 9px;
  border-radius: 7px;
  font-size: 9px;
  font-weight: 800;
}

.superadmin-badge.pending {
  background: #FFF3D8;
  color: #B47A16;
}

.superadmin-badge.approved {
  background: #DDF3E5;
  color: #238B57;
}

.superadmin-badge.rejected {
  background: #FCE4E4;
  color: #CC4D4D;
}

.superadmin-actions {
  display: flex;
  gap: 8px;
  margin-top: 17px;
  padding-top: 14px;
  border-top: 1px solid #EEF2EF;
}

.superadmin-action {
  flex: 1;
  min-height: 38px;
  border: none;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  transition: .2s;
}

.superadmin-action:disabled {
  opacity: .5;
  cursor: not-allowed;
}

.superadmin-action.approve {
  background: #238B57;
}

.superadmin-action.reject {
  background: #D95B5B;
}

.superadmin-action.delete {
  background: #66736B;
}

.superadmin-action:hover:not(:disabled) {
  filter: brightness(.92);
}

.superadmin-empty {
  grid-column: 1 / -1;
  background: white;
  border: 1px solid #E7EEE9;
  border-radius: 16px;
  padding: 65px 20px;
  text-align: center;
  color: #91A096;
}

.superadmin-empty h3 {
  color: #52675A;
  margin: 12px 0 5px;
}

.superadmin-message {
  margin-bottom: 18px;
  padding: 12px 15px;
  border-radius: 10px;
  font-size: 13px;
  background: #FCE4E4;
  color: #B83F3F;
}

.superadmin-loading {
  padding: 60px 20px;
  text-align: center;
  color: #829187;
}

.superadmin-loading button {
  margin-top: 15px;
  padding: 9px 16px;
  background: #238B57;
  color: white;
  border: none;
  border-radius: 9px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .superadmin-page {
    padding: 25px 4%;
  }

  .superadmin-summary {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .superadmin-list {
    grid-template-columns: 1fr;
  }

  .superadmin-stat {
    padding: 17px;
  }
}

@media (max-width: 480px) {
  .superadmin-header {
    align-items: flex-start;
  }

  .superadmin-heading h1 {
    font-size: 20px;
  }

  .superadmin-heading p {
    font-size: 11px;
  }

  .superadmin-icon {
    width: 43px;
    height: 43px;
  }

  .superadmin-icon-button {
    width: 36px;
    height: 36px;
  }

  .superadmin-stat-number {
    font-size: 24px;
  }

  .superadmin-user {
    flex-wrap: wrap;
  }
}
`;
