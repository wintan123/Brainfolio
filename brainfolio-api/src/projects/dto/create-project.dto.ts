import { IsNotEmpty } from "class-validator";

export class ProjectDto {
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    readonly description: string;

    @IsNotEmpty()
    readonly projectFile: string;

    @IsNotEmpty()
    readonly contributor: string;

    @IsNotEmpty()
    readonly like: number;

    @IsNotEmpty()
    readonly comment: string;

    @IsNotEmpty()
    readonly share: string;

}  