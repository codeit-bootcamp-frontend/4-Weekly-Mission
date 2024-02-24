import { useEffect, useState } from "react";

const useConvertDateFormat = (createdAt) => {
    const [format, setFormat] = useState("");

    useEffect(() => {
        const formatDate = (dateString) => {
            const date = new Date(dateString);

            return (
                `${date.getFullYear()}
                    .${(date.getMonth() + 1)
                    .toString()
                    .padStart(2, "0")}
                    .${date.getDate()
                    .toString()
                    .padStart(2, "0")}`
            )
        };

        setFormat(formatDate(createdAt));
    }, [createdAt]);

    return format;
};

export default useConvertDateFormat;