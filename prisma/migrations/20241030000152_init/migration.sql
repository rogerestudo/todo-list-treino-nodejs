-- CreateEnum
CREATE TYPE "ToDoStatus" AS ENUM ('CANCELED', 'DONE', 'PEDDING');

-- CreateTable
CREATE TABLE "ToDoList" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "todo" TEXT NOT NULL,
    "status" "ToDoStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ToDoList_pkey" PRIMARY KEY ("id")
);
