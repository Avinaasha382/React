export default function Header({header_logo, header_title}) {
    return (
        <header>
            <h1>{header_title}</h1>
            <img src={header_logo} alt="Quiz Logo" />
        </header>
    )
}