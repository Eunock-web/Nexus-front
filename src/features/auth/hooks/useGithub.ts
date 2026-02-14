





function useGithub() {
    const login = () => {
        window.location.href = `${import.meta.env.VITE_API_URL}/Oauth/github/redirect`
    }

    return { login }
}

export default useGithub