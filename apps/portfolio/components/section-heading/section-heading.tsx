/* eslint-disable-next-line */
export interface SectionHeadingProps {
    children: React.ReactNode;
}

export function SectionHeading(props: SectionHeadingProps) {
    return (
        <h2 className="mb-8 text-center text-3xl font-medium capitalize">
            {props.children}
        </h2>
    );
}

export default SectionHeading;
