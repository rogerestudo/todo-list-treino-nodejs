-- CreateEnum
CREATE TYPE "ToDoStatus" AS ENUM ('CANCELED', 'DONE', 'PENDING');

-- CreateTable
CREATE TABLE "ToDoList" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "todo" TEXT NOT NULL,
    "status" "ToDoStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ToDoList_pkey" PRIMARY KEY ("id")
);
