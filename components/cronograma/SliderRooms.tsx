import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

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
          slidesPerView={1}
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
                onClick={() => onRoomSelect(room.id)}
                className={`flex min-w-[200px] items-center gap-3 rounded-[20px] border-2 px-6 py-4 transition-all ${
                  selectedRoom === room.id
                    ? "border-accent bg-primary/5 text-primary"
                    : "border-primary bg-white text-gray-700 hover:border-primary/50"
                }`}
              >
                {room.image ? (
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-8 w-8 flex-shrink-0 object-cover"
                    style={{ width: 32, height: 32, borderRadius: 8 }}
                  />
                ) : (
                  <>
                    <div className="flex h-8 w-8 items-center justify-center bg-gray-200">
                      <span className="text-xs font-bold">
                        {room.name.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium">{room.name}</span>
                  </>
                )}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Custom navigation buttons */}
      <button className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-4 -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-300 bg-white transition-colors hover:bg-gray-50">
        <ChevronLeft className="h-5 w-5 text-gray-600" />
      </button>
      <button className="swiper-button-next-custom absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 translate-x-4 transform items-center justify-center rounded-full border border-gray-300 bg-white transition-colors hover:bg-gray-50">
        <ChevronRight className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
}

export default SliderRooms;
