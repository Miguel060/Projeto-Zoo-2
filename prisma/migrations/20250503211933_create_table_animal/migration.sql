-- CreateTable
CREATE TABLE "animal" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "descricao" TEXT,
    "imagemUrl" TEXT,

    CONSTRAINT "animal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "animal_id_key" ON "animal"("id");
