import React from "react";
import { Empty } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

export const EmptyState: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Empty
			image={<FileTextOutlined style={{ fontSize: 64, color: "#d9d9d9" }} />}
			description={t("empty")}
			style={{ padding: "40px" }}
		/>
	);
};
