import React from "react";

const Catg = (props) => {
  const data = [
    {
      cateImg:
        "https://avatars.mds.yandex.net/i?id=b03a01477a219663b60225c860350121-5885384-images-thumbs&n=13&exp=1",
      cateName: "Apple",
    },
    {
      cateImg:
        "https://avatars.mds.yandex.net/i?id=cee70e4bd9e76ac2573b5b5afe5dbf4f-4416220-images-thumbs&n=13&exp=1",
      cateName: "Samsung",
    },
    {
      cateImg: "https://pbs.twimg.com/media/FMsFNkCWYAQDjcD.jpg",
      cateName: "Oppo",
    },
    {
      cateImg:
        "https://bloganchoi.com/wp-content/uploads/2020/10/logo-vivo-1.jpg",
      cateName: "Vivo",
    },
    {
      cateImg:
        "https://avatars.mds.yandex.net/i?id=8d1599cfa01e21fe6cf9aeea416f24c6-5876212-images-thumbs&n=13&exp=1",
      cateName: "Redmi",
    },
    {
      cateImg:
        "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/sony.png",
      cateName: "Sony",
    },
  ];

  // const [directionSort, setDirectionSort] = useState(true);

  // const SortData = (field) => {
  //   const copyData = defaultShops.shopItems.concat();
  //   let sortData;
  //   if (directionSort) {
  //     sortData = copyData.name.includes(field);
  //   }
  //   sortShops(sortData);
  //   setDirectionSort(!directionSort);
  // };
  return (
    <>
      <div className='category'>
        <div className='chead flex4'>
          <h1>Бренды </h1>
          <h1>Магазины </h1>
        </div>
        <div className='flex8'>
          {data.map((value, index) => {
            return (
              <div
                onClick={() => {
                  props.SortData(value.cateName);
                }}
                className='box f_flex'
                key={index}>
                <img className='img1' src={value.cateImg} alt='' />
                <span>{value.cateName}</span>
              </div>
            );
          })}
        </div>

        <div className='box box2'>
          <button onClick={(e) => props.SortData("")}>
            Посмотреть все бренды
          </button>
        </div>
      </div>
    </>
  );
};

export default Catg;
