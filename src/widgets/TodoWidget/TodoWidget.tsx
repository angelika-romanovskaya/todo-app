import React from "react";
import { Card, Typography, Space, Divider, Tag, Button } from "antd";
import { UnorderedListOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { useTodos } from "@entities/Todo/model/hooks";
import { TodoList } from "@entities/Todo/ui/TodoList";
import { AddTodo } from "@features/AddTodo";
import { FilterTodos } from "@features/FilterTodos";
import { ClearCompleted } from "@features/ClearCompleted";
import { ThemeToggle } from "@features/ThemeToggle";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

export const TodoWidget: React.FC = () => {
	const { t, i18n } = useTranslation();
	const toggleLanguage = () => {
		const newLang = i18n.language === "en" ? "ru" : "en";
		i18n.changeLanguage(newLang);
	};
	const { filteredTodos, stats } = useTodos();

	return (
		<Card
			variant="borderless"
			style={{
				boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
				borderRadius: "12px",
				maxWidth: "800px",
				margin: "0 auto",
				height: "100%",
				display: "flex",
				flexDirection: "column",
			}}
			styles={{
				body: {
					flex: 1,
					display: "flex",
					flexDirection: "column",
					overflow: "hidden",
				},
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					marginBottom: 24,
				}}
			>
				<Title level={2} style={{ margin: 0 }}>
					<UnorderedListOutlined /> {t("app.title")}
				</Title>
				<Space>
					<ThemeToggle />
					<Button onClick={toggleLanguage}>
						{i18n.language === "en" ? "🇷🇺" : "🇬🇧"}
					</Button>
				</Space>
			</div>

			<AddTodo />
			<FilterTodos />

			<Space style={{ marginBottom: "16px" }}>
				<Tag icon={<UnorderedListOutlined />} color="blue">
					{t("stats.total", { count: stats.total })}
				</Tag>
				<Tag icon={<UnorderedListOutlined />} color="orange">
					{t("stats.active", { count: stats.active })}
				</Tag>
				<Tag icon={<CheckCircleOutlined />} color="green">
					{t("stats.completed", { count: stats.completed })}
				</Tag>
			</Space>

			<div style={{ flex: 1, overflowY: "auto", marginBottom: "16px" }}>
				<TodoList todos={filteredTodos} />
			</div>

			<Divider style={{ margin: "0 0 16px 0" }} />
			<ClearCompleted />
		</Card>
	);
};
