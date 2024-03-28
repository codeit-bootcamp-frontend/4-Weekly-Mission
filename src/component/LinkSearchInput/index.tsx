import searchImg from "../../images/search.svg";
import clearIcon from "../../images/clear.svg";
import { ClearIcon, LinkSearchInputWrapper, SearchIcon } from "./style";
import { ChangeEvent, FormEvent, useState } from "react";

const LinkSearchInput = ({
	onSubmit
}: {
	onSubmit: (keyword: string) => void;
}) => {
	const [searchValue, setSearchValue] = useState<string>("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleClick = () => {
		setSearchValue("");
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSubmit(searchValue);
	};

	return (
		<LinkSearchInputWrapper onSubmit={handleSubmit}>
			<SearchIcon src={searchImg} alt="검색 이미지" />
			<input
				placeholder="링크를 검색해 보세요"
				value={searchValue}
				onChange={handleChange}
			/>
			<ClearIcon src={clearIcon} alt="내용 지우기" onClick={handleClick} />
		</LinkSearchInputWrapper>
	);
};

export default LinkSearchInput;
