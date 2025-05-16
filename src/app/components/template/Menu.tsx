export interface MenuProps{
    children: React.ReactNode
}

export default function Menu(propS: MenuProps){
    return (
        <aside className="menu">
            {propS.children}
        </aside>
    )
}