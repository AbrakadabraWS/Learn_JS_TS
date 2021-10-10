export const className = (style: {[key: string]: string}, name: string) => {
    
    return (mods?: {[key: string]: string|boolean|number|undefined}, mix?: (string|undefined)[]) => {
        const modsArray: string[] = [];

        if (mods) {
            for (let key in mods) {
                if (typeof mods[key] === 'boolean') {
                    modsArray.push(style[`${name}_${key}`]);
                } else if (mods[key]) {
                    modsArray.push(style[`${name}_${key}_${mods[key]}`]);
                }
            }
        }
        
        return [
            style[name],
            ...modsArray,
            mix,
        ].join(' ');
    }
}
