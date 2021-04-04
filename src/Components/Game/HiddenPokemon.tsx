import React from "react";
import { LazyImage } from "react-lazy-images";
import egg from "../../assets/pokemon-egg.png";
import { getImageSourcefromID } from "../../functions/GlobalFunctions";

interface HiddenPokemonProps {
  id: number;
  reveal: boolean;
}

const HiddenPokemon: React.FC<HiddenPokemonProps> = ({ id, reveal }) => {
  return (
    <div className="w-full h-full rounded-md bg-white p-4">
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          background: `radial-gradient(rgba(255,255,255,0) 0%, #6890F0 100%)`,
        }}
      >
        <div className="w-52 h-52">
          <LazyImage
            src={getImageSourcefromID(id)}
            alt="secret pokemon"
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
                alt="secret pokemon"
                draggable="false"
                onDragStart={(e: React.DragEvent<HTMLDivElement>) =>
                  e.preventDefault()
                }
                style={{
                  filter: `brightness(${reveal ? 1 : 0})`,
                  opacity: reveal ? 1 : 0.8,
                }}
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
    </div>
  );
};

export default HiddenPokemon;
