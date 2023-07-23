import styles from "./list-routes.module.css";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { addRoute } from "../../store/routes";
import { useState } from "react";
import { dataSourceRow } from "../../utils/constants";

const ListRoutes = () => {
  const dispatch = useDispatch();
  const [indexRowActive, setIndexRowActive] = useState("");

  const columns = [
    {
      title: "Маршрут",
      dataIndex: "route",
      key: "route",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Точка 1 (lat, lng)",
      dataIndex: "point_1",
      key: "point_1",
      render: (arr) => (
        <div className={styles.point}>
          {arr.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ),
    },
    {
      title: "Точка 2 (lat, lng)",
      dataIndex: "point_2",
      key: "point_2",
      render: (arr) => (
        <div className={styles.point}>
          {arr.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ),
    },
    {
      title: "Точка 3 (lat, lng)",
      dataIndex: "point_3",
      key: "point_3",
      render: (arr) => (
        <div className={styles.point}>
          {arr.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className={styles.wrapper}>
      <Table
        bordered
        className={styles.table}
        dataSource={dataSourceRow}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: (e) => {
              dispatch(addRoute(record));
              setIndexRowActive(rowIndex);
            },
          };
        }}
        rowClassName={(record, rowIndex) => {
          return rowIndex === indexRowActive
            ? `${styles.row} ${styles.row_active}`
            : `${styles.row}`;
        }}
      />
    </section>
  );
};

export default ListRoutes;
