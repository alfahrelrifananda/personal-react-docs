function Footer() {
    return (
        <footer>
            {/* Untuk memberi js di dalam harus dengan {} */}
            <p>{new Date().getFullYear()} &copy;Personal React Docs.</p>
        </footer>
    )
}

export default Footer