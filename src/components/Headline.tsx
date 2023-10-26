interface HeadlineProps {
    text: string
}

const Headline = ({ text }: HeadlineProps) => (
    <div className="text-xl font-medium mb-2">{text}</div>
)

export default Headline
