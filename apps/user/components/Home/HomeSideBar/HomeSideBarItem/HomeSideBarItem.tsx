import { Card, Modal } from "@bamboo/ui";
import React from "react";

import card1 from "../../../../asset/common/card1.svg";
import card2 from "../../../../asset/common/card2.svg";
import card3 from "../../../../asset/common/card3.svg";
import card4 from "../../../../asset/common/card4.svg";
import { DontDoThat } from "../../../../constant/sidebar";
import card12 from "../../../../asset/common/card12.png";
import Image from "next/image";
import Write from "../../../Common/Write/Write";
import {
  Card4Box,
  CardImg,
  CardInfoBox,
  CardInfoText,
  CardTitle,
} from "./HomeSideBarItem.style";
import useModal from "@bamboo/ui/stories/Modal/hooks/useModal";

const HomeSideBarItem = () => {
  const { close, isOpened, open } = useModal();
  return (
    <>
      <Card
        size="sm"
        style={{ display: "flex", cursor: "pointer", zIndex: -1 }}
      >
        <Image width={42} height={42} src={card1.src} alt="" />
        <CardInfoBox onClick={open}>
          <CardTitle>익명 제보하기</CardTitle>
          <CardInfoText>로그인 없이 익명으로 제보합니다</CardInfoText>
        </CardInfoBox>
      </Card>
      <Modal isOpened={isOpened} onClose={close}>
        <Write />
      </Modal>
      <Card
        size="sm"
        style={{ display: "flex", cursor: "pointer", zIndex: -1 }}
      >
        <CardInfoBox>
          <CardTitle>기명 제보하기</CardTitle>
          <CardInfoText>도담도담 계정으로 기명 제보합니다</CardInfoText>
        </CardInfoBox>
      </Card>
      <Card size="sm" style={{ display: "flex", zIndex: -1 }}>
        <CardImg src={card3.src} />
        <CardInfoBox>
          <CardTitle>제보를 삭제하고 싶을 때</CardTitle>
          <CardInfoText>
            삭제하고 싶다는 말과 함께 해당 제보 내용과 사유를 제보하기를 통해
            말씀해 주세요
          </CardInfoText>
        </CardInfoBox>
      </Card>
      <Card size="sm" style={{ display: "flex", zIndex: -1 }}>
        <Card4Box>
          <CardImg src={card4.src} />
          <div style={{ flexDirection: "column" }}>
            <CardTitle style={{ marginLeft: "12px" }}>
              이런 제보는 안 돼요
            </CardTitle>
            {DontDoThat.map((title) => (
              <CardInfoText
                style={{ marginLeft: "12px", marginTop: "4px" }}
                key={`Dont do ${title}`}
              >
                • {title.title}
              </CardInfoText>
            ))}
            <CardInfoText style={{ marginTop: "24px" }}>
              (이외에도 관리자가 부적절하다고 판<br />
              단한 제보와 댓글은 경고 처리 없이
              <br /> 삭제 조치 될 수 있습니다.)
            </CardInfoText>
          </div>
        </Card4Box>
      </Card>
    </>
  );
};

export default HomeSideBarItem;
