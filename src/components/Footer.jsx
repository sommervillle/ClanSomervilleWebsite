export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ padding: '1rem', borderTop: '1px solid #ccc', marginTop: 'auto', textAlign: 'center' }}>
      <p>&copy; {year} Clan Somerville. All rights reserved.</p>
    </footer>
  )
}
