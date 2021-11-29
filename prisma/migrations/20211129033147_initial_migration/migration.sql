-- CreateTable
CREATE TABLE "Roaster" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Roaster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coffee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "roasterId" INTEGER NOT NULL,

    CONSTRAINT "Coffee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Roaster_name_key" ON "Roaster"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Coffee_name_key" ON "Coffee"("name");

-- AddForeignKey
ALTER TABLE "Coffee" ADD CONSTRAINT "Coffee_roasterId_fkey" FOREIGN KEY ("roasterId") REFERENCES "Roaster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
