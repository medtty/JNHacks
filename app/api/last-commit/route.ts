import { getLastCommitDate } from '@/utils/getLastCommitDate';
import { NextResponse } from 'next/server';

export async function GET() {
  const date = getLastCommitDate();
  return NextResponse.json({ date });
}