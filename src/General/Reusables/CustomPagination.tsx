import { Pagination, PaginationItem, SxProps } from "@mui/material"

type Size = "small" | "medium" | "large";

interface CustomPaginationProps {
    page: number,
    count: number,
    size?: Size
    sx?: SxProps
}

const CustomPagination: React.FC<CustomPaginationProps> = ({page, count, size, sx}) => {
    return (
        <Pagination
            count={count} 
            page={page} 
            hideNextButton 
            hidePrevButton 
            size={size ? size : "small"} 
            sx={{...sx}} 
            renderItem={(params) => (<PaginationItem {...params} disabled={params.page !== page}/>)
        }/>
    );

};

export default CustomPagination;