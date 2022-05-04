import { prisma } from "../../prisma";
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from "../feedback-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    const feedback = await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
