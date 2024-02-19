import React from "react";

interface Props {
    className?: string;
    children: [React.ReactNode, React.ReactNode];
    reverse?: boolean;
}

const TwoColumns: React.FC<Props> = ({ className = "", children, reverse = false }) => {
    const [firstColumn, secondColumn] = React.Children.toArray(children);

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className} ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
            <div className={reverse ? "order-2 md:order-1" : "order-1"}>{firstColumn}</div>
            <div className={reverse ? "order-1 md:order-2" : "order-2"}>{secondColumn}</div>
        </div>
    );
}

export default TwoColumns;
