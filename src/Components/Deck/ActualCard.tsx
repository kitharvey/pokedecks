import React from "react";
import { FaHeart, FaInfoCircle, FaRegHeart } from "react-icons/fa";
import { LazyImage } from "react-lazy-images";
import { findColor, getTypeIcon } from "../../functions/getTypeIconAndColor";
import {
  getIDStringfromID,
  getImageSourcefromID,
} from "../../functions/GlobalFunctions";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";
import { setModalIndex, setModalShow } from "../../reduxStore/modalSlice";
import { updateFavorites } from "../../reduxStore/userSlice";
import ClickableIcons from "./ClickableIcons";
import egg from "../../assets/pokemon-egg.png";

interface ActualCardProps {
  id: number;
  name: string;
  types: string[];
}

const ActualCard: React.FC<ActualCardProps> = ({ id, name, types }) => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.user);
  const { modalShow } = useAppSelector((state) => state.modal);
  const handleFavToggle = () => {
    dispatch(updateFavorites({ id, name, types }));
  };
  const handleModal = () => {
    dispatch(setModalIndex(id));
    dispatch(setModalShow(true));
  };
  return (
    <div className="h-full w-full rounded-md p-4 flex flex-col justify-between bg-white relative addFilter">
      <div
        className="w-full h-full relative "
        style={{
          background: `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${
            findColor(types[0])[1]
          } 100%)`,
        }}
      >
        <div className="absolute left-2 top-2">
          <button type='button' onClick={() => handleFavToggle}>
            {userData &&
            userData.favorites.filter((fav) => fav.id === id).length > 0 ? (
              <ClickableIcons
                icon={<FaHeart />}
                text="Remove from favorites"
                color="red-400"
                colorHover="red-500"
              />
            ) : (
              <ClickableIcons
                icon={<FaRegHeart />}
                text="Add to favorites"
                color="white"
                colorHover="red-500"
              />
            )}
          </button>
        </div>
        <p className="absolute top-5 right-1/2 transform translate-x-1/2 text-black text-opacity-25 font-bold text-5xl tracking-widest leading-none">
          #{getIDStringfromID(id)}
        </p>
        <button type='button' className="absolute right-2 top-2 ">
          {!modalShow && (
            <button type='button' onClick={() => handleModal}>
              <ClickableIcons
                icon={<FaInfoCircle />}
                text="View more info"
                color="white"
                colorHover="gray-200"
              />
            </button>
          )}
        </button>
        <div className="w-52 h-52 absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2">
          <LazyImage
            src={getImageSourcefromID(id)}
            alt={name}
            placeholder={({ imageProps, ref }) => (
              <img
                ref={ref}
                src={egg}
                alt={imageProps.alt}
                draggable="false"
                onDragStart={(e: React.DragEvent<HTMLDivElement>) =>
                  e.preventDefault()
                }
                style={{ filter: "blur(10px)" }}
              />
            )}
            actual={({ imageProps }) => (
              <img
                {...imageProps}
                alt={name}
                draggable="false"
                onDragStart={(e: React.DragEvent<HTMLDivElement>) =>
                  e.preventDefault()
                }
              />
            )}
            error={() => (
              <img
                src={egg}
                alt="egg error"
                draggable="false"
                onDragStart={(e: React.DragEvent<HTMLDivElement>) =>
                  e.preventDefault()
                }
                style={{ filter: "blur(10px)" }}
              />
            )}
          />
        </div>
      </div>
      <div className="flex absolute bottom-12 right-1/2 transform translate-x-1/2 translate-y-1/4 ">
        {types.map(type => (
          <img
            src={getTypeIcon(type)[1]}
            className="-m-0.5 rounded-full"
            style={{
              width: "40px",
              height: "40px",
              margin: types.length > 1 ? "-0.125rem" : "0",
            }}
            key={type}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            alt={getTypeIcon(type)[0]}
          />
        ))}
      </div>

      <div className="absolute bottom-4 right-1/2 transform translate-x-1/2  w-max  text-black text-center font-bold capitalize text-xl leading-none">
        {name}
      </div>
    </div>
  );
};

export default ActualCard;
