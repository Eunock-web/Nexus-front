import { useNavigate, useParams } from "react-router-dom"
import useValidateLink from "../hooks/useValidateLink";
import { useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";


function ValidateEmail() {
  const { setTempEmail } = useAuth();
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();

  const { mutate, isSuccess, isPending, isError } = useValidateLink();

  useEffect(() => {
    if (token) {
      mutate({ token }, {
        onSuccess: (data) => {
          if (data?.email) setTempEmail(data.email);
          setTimeout(() => navigate("/updatePassword"), 3000);
        }
      });
    }
  }, [token, mutate])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white p-4">
      <div className="w-full max-w-md p-8 rounded-2xl bg-[#1e1e1e] border border-white/10 shadow-xl text-center">
        <h1 className="text-2xl font-bold mb-6">Vérification Nexus</h1>

        {isPending && (
          <div className="space-y-4">
            <div className="animate-spin w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto"></div>
            <p className="text-gray-400">Validation de votre lien en cours...</p>
          </div>
        )}

        {isSuccess && (
          <div className="space-y-4">
            <div className="text-5xl">✅</div>
            <p className="text-green-400 font-medium">Email vérifié avec succès !</p>
            <p className="text-sm text-gray-500">Vous allez être redirigé vers la page de connexion.</p>
          </div>
        )}

        {isError && (
          <div className="space-y-4">
            <div className="text-5xl">❌</div>
            <p className="text-red-400 font-medium">Le lien est invalide ou expiré.</p>
            <button
              onClick={() => navigate("/resend-email")}
              className="mt-4 px-6 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
            >
              Renvoyer un lien
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ValidateEmail