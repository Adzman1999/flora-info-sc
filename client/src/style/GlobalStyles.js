import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body{
        color: #009C4C;
    }
    
    .MuiOutlinedInput-root {
        color: #009C4C;
    }
    .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline{
        border-color: #009C4C;
    }
    
    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
        border-color: #009C4C;
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #009C4C;
        color: #000;
        
    }
    ::-webkit-scrollbar {
        width: 5px;
    }


    .MuiButton-root.MuiButton-outlined{
        border-color: #009C4C;
        color: #009C4C;
    }

    .MuiButton-root.MuiButton-contained{
        color: #fff;
        background: #009C4C;
    }
    
`;

export default GlobalStyles;

// ::-webkit-scrollbar-thumb {
//     background: ${({ theme }) => theme.secondary};
//     border-radius: 10px;

// }
// ::-webkit-scrollbar-thumb:hover {
//     background: ${({ theme }) => theme.primary};
// }
// .MuiList-root{
//     background: ${({ theme }) => theme.secondary};
//     border-radius: 0px;
//     overflow: hidden;
// }

// .MuiList-root .MuiMenu-list{
//     color: ${({ theme }) => theme.subtitle};
// }

// .MuiList-root .MuiMenu-list:hover{
//     color: ${({ theme }) => theme.subtext};
//     background: ${({ theme }) => theme.primary};
// }
// .MuiBadge-badge{
//      background: ${({ theme }) => theme.secondary};
//      color: ${({ theme }) => theme.primary};
// }
// .MuiChip-label{
//     color: ${({ theme }) => theme.primary};
// }
// .border-style{
//     border-color: ${({ theme }) => theme.primary};
// }
