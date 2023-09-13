import { useAtom } from "jotai";
import { useCallback } from "react";

import modalAtom from "@/state/modalAtom";

import MemoCreateModalElement from "@/components/atoms/Modal/MemoCreateModalElement";
import LoginModal from "@/components/organisms/LoginModal";

export const useModal = () => {
    const [modal, setModal] = useAtom(modalAtom);

    const closeModal = useCallback(() => {
        setModal((prev) => { return { ...prev, isOpen: false } })
    }, [setModal]);

    const modalTypeMatching = {
        memoCreate: {
            title: '메모 추가하기',
            element: <MemoCreateModalElement />,
        },
        login: {
            title: '소셜 로그인하기',
            element: <LoginModal />,
        }
    }

    const connectMemoWithScrapId = useCallback((scrapId: number) => {
        setModal((prev) => { return { ...prev, scrapId: scrapId } })
    }, [setModal]);

    const openModal = useCallback((
        type: string
    ) => {
        setModal({
            ...modalTypeMatching[type as keyof typeof modalTypeMatching],
            isOpen: true,
        })
    }, [setModal]);

    return { modal, closeModal, openModal, connectMemoWithScrapId };
}
