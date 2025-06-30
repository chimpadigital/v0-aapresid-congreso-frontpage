import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface Room {
  id: string;
  name: string;
  image: string | null;
  sponsor: string;
  isSelected: boolean;
}

interface SliderRoomsProps {
  rooms: Room[];
  selectedRoom: string;
  onRoomSelect: (roomId: string) => void;
}

export function SliderRooms({
  rooms,
  selectedRoom,
  onRoomSelect,
}: SliderRoomsProps) {
  return (
    <div className="relative">
      <div className="relative mx-auto w-[90%]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="room-swiper"
        >
          {rooms.map((room) => (
            <SwiperSlide key={room.id} className="w-full">
              <button
                onClick={() =>
                  onRoomSelect(selectedRoom === room.id ? "" : room.id)
                }
                className={`relative flex h-full max-h-[71px] min-w-[190px] items-center gap-3 rounded-[20px] border-2 px-4 py-2 transition-all ${
                  selectedRoom === room.id
                    ? "border-accent border-3 text-primary"
                    : "border-primary bg-white text-gray-700 hover:border-primary/50"
                }`}
              >
                {selectedRoom === room.id && (
                  <div className="absolute -right-3 -top-[10px] grid aspect-auto h-6 place-items-center rounded-full bg-primary">
                    <X className="h-4 text-white" />
                  </div>
                )}
                {room.image ? (
                  <figure className="gris relative mx-auto h-full min-h-[71px] w-[70%] place-items-end">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="flex-shrink-0 object-contain"
                    />
                  </figure>
                ) : (
                  <div className="grid min-h-[71px] place-items-center">
                    <span className="font-medium">{room.name}</span>
                  </div>
                )}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Custom navigation buttons */}
      <button className="swiper-button-prev-custom absolute left-0 top-[59%] z-10 flex h-10 w-10 -translate-x-4 -translate-y-1/2 transform items-center justify-center rounded-full border border-primary bg-white transition-colors hover:bg-gray-50 disabled:opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
        >
          <path
            d="M12.1322 20.0609L18.0453 13.8495C18.1563 13.7328 18.3069 13.6673 18.4639 13.6673C18.6209 13.6673 18.7715 13.7328 18.8826 13.8495C18.9936 13.9661 19.056 14.1243 19.056 14.2892C19.056 14.4542 18.9936 14.6124 18.8826 14.729L13.9783 19.8795L26.7422 19.8795C26.899 19.8795 27.0494 19.945 27.1603 20.0614C27.2712 20.1779 27.3335 20.3359 27.3335 20.5007C27.3335 20.6654 27.2712 20.8234 27.1603 20.9399C27.0494 21.0564 26.899 21.1218 26.7422 21.1218L13.9783 21.1218L18.8826 26.2723C18.9936 26.3889 19.056 26.5471 19.056 26.7121C19.056 26.877 18.9936 27.0352 18.8826 27.1518C18.7715 27.2685 18.6209 27.334 18.4639 27.334C18.3069 27.334 18.1563 27.2685 18.0453 27.1518L12.1322 20.9404C12.0771 20.8827 12.0335 20.8142 12.0036 20.7387C11.9738 20.6633 11.9585 20.5824 11.9585 20.5007C11.9585 20.419 11.9738 20.3381 12.0036 20.2626C12.0335 20.1871 12.0771 20.1186 12.1322 20.0609Z"
            fill="#2D3D34"
          />
        </svg>
      </button>
      <button className="swiper-button-next-custom absolute right-0 top-[59%] z-10 flex h-10 w-10 -translate-y-1/2 translate-x-4 transform items-center justify-center rounded-full border border-primary bg-white transition-colors hover:bg-gray-50 disabled:opacity-50">
        <span className="rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
          >
            <path
              d="M12.1322 20.0609L18.0453 13.8495C18.1563 13.7328 18.3069 13.6673 18.4639 13.6673C18.6209 13.6673 18.7715 13.7328 18.8826 13.8495C18.9936 13.9661 19.056 14.1243 19.056 14.2892C19.056 14.4542 18.9936 14.6124 18.8826 14.729L13.9783 19.8795L26.7422 19.8795C26.899 19.8795 27.0494 19.945 27.1603 20.0614C27.2712 20.1779 27.3335 20.3359 27.3335 20.5007C27.3335 20.6654 27.2712 20.8234 27.1603 20.9399C27.0494 21.0564 26.899 21.1218 26.7422 21.1218L13.9783 21.1218L18.8826 26.2723C18.9936 26.3889 19.056 26.5471 19.056 26.7121C19.056 26.877 18.9936 27.0352 18.8826 27.1518C18.7715 27.2685 18.6209 27.334 18.4639 27.334C18.3069 27.334 18.1563 27.2685 18.0453 27.1518L12.1322 20.9404C12.0771 20.8827 12.0335 20.8142 12.0036 20.7387C11.9738 20.6633 11.9585 20.5824 11.9585 20.5007C11.9585 20.419 11.9738 20.3381 12.0036 20.2626C12.0335 20.1871 12.0771 20.1186 12.1322 20.0609Z"
              fill="#2D3D34"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default SliderRooms;
