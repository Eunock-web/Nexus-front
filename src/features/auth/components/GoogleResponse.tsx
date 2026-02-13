import useGoogleResponse from "../hooks/useGoogleResponse"



function GoogleResponse() {

    const { isPending, isError } = useGoogleResponse();

    return <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg text-center">
            {isPending && (
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <h2 className="text-xl font-semibold text-gray-800">Authentification en cours...</h2>
                    <p className="text-gray-500">Veuillez patienter pendant que nous vous connectons.</p>
                </div>
            )}

            {isError && (
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 text-red-500 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">Échec de l'authentification</h2>
                    <p className="text-gray-500">Une erreur est survenue lors de la connexion avec Google.</p>
                    <a href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Retour à la connexion
                    </a>
                </div>
            )}
        </div>
    </div>
}

export default GoogleResponse