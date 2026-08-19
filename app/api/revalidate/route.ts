import { revalidatePath, revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{
      _type: string;
      slug?: { current: string };
    }>(req, process.env.SANITY_REVALIDATE_SECRET);

    // If a secret is provided, validate it
    const secret = req.nextUrl.searchParams.get('secret');
    if (process.env.SANITY_REVALIDATE_SECRET && secret !== process.env.SANITY_REVALIDATE_SECRET && !isValidSignature) {
      return new NextResponse('Invalid token', { status: 401 });
    }

    if (!body?._type) {
      return new NextResponse('Bad Request', { status: 400 });
    }

    // Revalidate the blog index and specific post
    revalidatePath('/blog', 'page');
    revalidatePath('/blog/', 'page');
    revalidatePath('/', 'page');

    if (body.slug?.current) {
      revalidatePath(`/${body.slug.current}`, 'page');
      revalidatePath(`/${body.slug.current}/`, 'page');
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (err: any) {
    console.error('Revalidation error:', err);
    return new NextResponse(err.message, { status: 500 });
  }
}
