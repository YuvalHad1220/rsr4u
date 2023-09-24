import { SxProps, Typography, Box, Divider, SvgIconProps } from "@mui/material";
import CustomPaper from "./CustomPaper";

interface StatusCardProps {
    mainTitle: string,
    secondaryTitle: string,
    secondaryTitleColor? : string,
    bottomTitle?: string,
    icon?: React.ReactElement<SvgIconProps>,
    iconColor?: string,
};


const StatusCard: React.FC<StatusCardProps> = ({mainTitle, secondaryTitle, bottomTitle, icon, secondaryTitleColor}) => {
    const paperSx: SxProps = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 1.8,
        height: "8rem",
        width: "18rem" // may be changed using grid
    };

    const header = (
        <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Typography>{mainTitle}</Typography>
                {icon}
            </Box>
            <Typography variant="h5" fontWeight="bold" color={secondaryTitleColor ? secondaryTitleColor : "font.primary"}>{secondaryTitle}</Typography>
        </Box>
       
    );

    const footer = (
        bottomTitle &&
        <>
            <Divider />
            <Typography variant="body2">{bottomTitle}</Typography>
        </>
    );
    
    return (
        <CustomPaper sx={paperSx}>
            {header}
            {footer}
        </CustomPaper>
    );
};

export default StatusCard;