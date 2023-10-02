export const stringToRGBA = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
    
    const r = (hash & 0xFF) + 50; // Increase red component to lighten the color
    const g = ((hash >> 8) & 0xFF) + 50; // Increase green component
    const b = ((hash >> 16) & 0xFF) + 50; // Increase blue component
    
    
    return {
        backgroundColor: `rgba(${r},${g},${b},0.2)`,
        borderColor: `rgba(${r},${g},${b},1)`
    };
}
