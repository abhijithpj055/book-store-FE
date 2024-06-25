import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/admin/check-admin",
          {
            withCredentials: true,
          },
        );

        const data = res.data;
        console.log(data);
        
        if (data.success === false) {
          navigate("/admin/signup", { replace: true });
        }
      } catch (error) {
        console.error("Error occurred while checking admin:", error);
        navigate("/admin/signup", { replace: true });
      }
    };
    checkAdmin();
  }, [navigate]);

  return children;
};

export default AdminRoutes;