import {MigrationInterface, QueryRunner} from "typeorm";

export class criarTabelas1639873978783 implements MigrationInterface {
    name = 'criarTabelas1639873978783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "personagem" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "usuarioId" uuid, CONSTRAINT "PK_1f65b2a040acb27adfa68db5526" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "personagem" ADD CONSTRAINT "FK_7812238371ea6685dea139dfb88" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "personagem" DROP CONSTRAINT "FK_7812238371ea6685dea139dfb88"`);
        await queryRunner.query(`DROP TABLE "personagem"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
