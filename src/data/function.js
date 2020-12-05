export const listItem = (list) =>
  list.map((item, id) => (
    <>
      <div key={id} className={`${item?.class} listItem`}>
        <p>{item?.name}</p>
        <p>{item.quantity}</p>
      </div>
    </>
  ));
