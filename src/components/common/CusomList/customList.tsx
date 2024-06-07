export interface ListContentProps {
  header: string;
  content: string;
}

const IconComp = ({background}: { background: string}) => {
  return (
    <span className={`inline-block scale-[0.6] md:scale-[1] absolute -top-2 md:top-0 -left-7 ${background}`}>
      <svg
        width="57"
        height="57"
        viewBox="0 0 67 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="33.5"
          cy="33.5"
          r="32.6895"
          stroke="#860972"
          strokeWidth="1.62097"
        />
        <path
          d="M46.2069 33.4797L21.5632 19.2529L26.8196 33.4797L21.5632 47.7064L46.2069 33.4797Z"
          fill="#860972"
        />
      </svg>
    </span>
  );
};


const CustomList = ({
  fill,
  data,
  background = "bg-neutral-100",
}: {
  fill?: string;
  data: ListContentProps[];
  background?: string;
}) => {
  const listItems = data.map(
    ({ header, content }: ListContentProps, idx: number) => (
      <li
        key={idx}
        className={`mb-2 border-main relative ${
          idx == data.length - 1 ? "" : "dashed"
        }`}
      >
        <IconComp background={background} />
        <div className="pb-3 pt-1 ps-10">
          <p className="font-semibold text-[23px] sm:text-[34px]">{header}</p>
          <p className="text-base sm:py-3 sm:text-[21px]">{content}</p>
        </div>
      </li>
    )
  );

  return <ul className="outfit-font text-dark">{listItems}</ul>;
};

export default CustomList;
