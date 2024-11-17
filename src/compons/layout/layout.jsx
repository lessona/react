export const Layout = ({children, sidebar}) =>{
    return (
        <div>
        <header>Restaurants header</header>
        {sidebar}
        {children}
        <footer>Restaurants footer</footer>
        </div>
    )
}