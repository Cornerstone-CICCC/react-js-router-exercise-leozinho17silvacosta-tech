const Footer = () => {
    const getYear = new Date ().getFullYear();
  return (
    <footer className="mt-8 p-2 bg-slate-300 text-center">
        Copyright {getYear} - Leonardo Costa
    </footer>
  )
}

export default Footer