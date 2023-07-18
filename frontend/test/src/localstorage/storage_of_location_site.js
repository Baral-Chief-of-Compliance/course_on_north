export function set_part_of_navbar(name){
    localStorage.setItem('part_of_site', name)
}

export function get_name_part_of_navbar(){
    const name = localStorage.getItem('part_of_site')

    return name
}