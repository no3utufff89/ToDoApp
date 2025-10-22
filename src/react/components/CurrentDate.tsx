function CurrentDate() {
    const formatDate = (date: Date): string => {
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',

            month: 'short',
            year: 'numeric',

        });
    };

    const currentDate = formatDate(new Date());

    return (
        <div>
            <span className="font-semibold text-[#6b6767] text-[14px]">{currentDate}</span>
        </div>
    );
}

export default CurrentDate;