import { getLastCommitDate } from '@/utils/getLastCommitDate';
import { NextResponse } from 'next/server';

export const revalidate = 10; // Revalidate every 10 seconds

export async function GET() {
  const date = getLastCommitDate();
  return NextResponse.json({ date });
}
