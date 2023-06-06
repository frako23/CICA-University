"""empty message

Revision ID: b3a91f7e8979
Revises: 68c31a60d26b
Create Date: 2023-06-06 11:59:04.690437

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b3a91f7e8979'
down_revision = '68c31a60d26b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('agency_ybt', sa.String(length=50), nullable=True))
        batch_op.add_column(sa.Column('own_agency', sa.String(length=50), nullable=True))
        batch_op.add_column(sa.Column('status', sa.Enum('active', 'inactive', name='status'), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('status')
        batch_op.drop_column('own_agency')
        batch_op.drop_column('agency_ybt')

    # ### end Alembic commands ###
