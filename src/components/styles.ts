export const styles = {
    root: {
        transition: "linear 0.5s ease",
        m: 2,
        p: 1,
        background: '#f0f0f0',
        height: "92vh",
        overflow: "auto",
        boxShadow: " 40px 40px 60px #b4b4b4,20px 20px 60px #b4b4b4, -20px -20px 60px #ffffff, -20px -20px 60px #ffffff",
        "&:-webkitScrollbar": {
            display: "none"
        }
    },
    inputContainer: {
        m: 2
    },
    input: {
        width: "60%",
        "& input": {
            color: "#3b82f6",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "2px solid #3b82f6",
                color: "#3b82f6",
            },
            "&:hover fieldset": {
                borderColor: "#3b82f6",
                opacity: 0.7
            },
        },

    },
    childContainer: {
        width: "100%",
    },
    childItem_Container: {
        width: '60%',
    },
    addBtn: {
        padding: "10px 35px",
        background: "#3b82f6",
        color: "white",
        textTransform: "capitalize",
        fontSize: { xs: "16px", md: "18px", lg: "20px" },
        fontWeight: 500,
        "&:hover": {
            background: "#3b82f6",
            opacity: 0.8,
            color: "white",
        },
    },
    childItem: {
        display: 'flex',
        height: "100%",
        border: "1px solid #3b82f6",
        p: 1, m: 2,
        boxShadow: "1px 2px 3px #3b82f6",
        borderRadius: 6
    },
    itemTxt: { width: "10%", color: "#3b82f6", fontWeight: 900, overflowY: "auto" },
    iconStyles: {
        color: '#3b82f6',
        cursor: "pointer",

        "&:hover": {
            opacity: 0.8,
            transform: "scale(1.2)",
        },
    },

};