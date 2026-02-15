





function useGoogle() {
    const login = () => {
        window.location.href = `${import.meta.env.VITE_API_URL}/Oauth/google/redirect`
    }

    return { login }
}

export default useGoogle