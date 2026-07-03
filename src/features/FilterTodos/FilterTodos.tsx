import React from "react";
import { Segmented } from "antd";
import {
	AppstoreOutlined,
	CheckSquareOutlined,
	ClockCircleOutlined,
} from "@ant-design/icons";
import { FilterType } from "@entities/Todo/model/types";
import { useTodos } from "@entities/Todo/model/hooks";
import { useTranslation } from "react-i18next";

export const FilterTodos: React.FC = () => {
	const { filter, setFilter } = useTodos();
	const { t } = useTranslation();

	const options = [
		{
			label: t("filter.all"),
			value: "all" as FilterType,
			icon: <AppstoreOutlined />,
		},
		{
			label: t("filter.active"),
			value: "active" as FilterType,
			icon: <ClockCircleOutlined />,
		},
		{
			label: t("filter.completed"),
			value: "completed" as FilterType,
			icon: <CheckSquareOutlined />,
		},
	];

	return (
		<Segmented
			options={options}
			value={filter}
			onChange={(value) => setFilter(value as FilterType)}
			block
			size="large"
			style={{ marginBottom: "24px" }}
		/>
	);
};
