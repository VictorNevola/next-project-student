export interface MenuDropDown {
    isActive: boolean
}

export interface MenuAsideMobile {
    isActive: boolean
}

export interface IlinkMenu {
    titleLink: string,
    urlLink: string,
    svgLink: string,
    hasSubMenu: boolean,
    linksSubMenu?: Array<{
        titleLink: string,
        urlLink: string
    }>
}