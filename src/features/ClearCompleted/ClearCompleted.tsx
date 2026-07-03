import React from "react";
import { App, Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useTodos } from "@entities/Todo/model/hooks";
import { useTranslation } from "react-i18next";

export const ClearCompleted: React.FC = () => {
	const { stats, clearCompleted } = useTodos();
	const { t } = useTranslation();
	const { message } = App.useApp();

	if (stats.completed === 0) return null;

	const handleClear = () => {
		clearCompleted();
		message.success(t("clear.success", { count: stats.completed }));
	};

	return (
		<Popconfirm
			title={t("clear.button", { count: stats.completed })}
			description={t("clear.confirm", { count: stats.completed })}
			onConfirm={handleClear}
			okText={t("confirm.yes")}
			cancelText={t("confirm.no")}
		>
			<Button
				danger
				icon={<DeleteOutlined />}
				type="dashed"
				style={{ marginTop: 16 }}
			>
				{t("clear.button", { count: stats.completed })}
			</Button>
		</Popconfirm>
	);
};
