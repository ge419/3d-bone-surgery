import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

import React from "react";

const Admin = async () => {
  const session = await auth();
  if (!session) {
    redirect("api/auth/signin?callbackUrl=/admin");
  }
  return (
    <div>
      <h1>Welcome to Admin Page!</h1>
      <p>{session.user?.email}</p>
      <p>{session.user?.role}</p>
    </div>
  );
};

export default Admin;
