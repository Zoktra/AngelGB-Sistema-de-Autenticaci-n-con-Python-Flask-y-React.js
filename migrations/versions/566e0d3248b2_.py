"""empty message

Revision ID: 566e0d3248b2
Revises: caab472013e7
Create Date: 2024-12-15 21:48:20.559624

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '566e0d3248b2'
down_revision = 'caab472013e7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_name', sa.String(length=50), nullable=False))
        batch_op.drop_column('name')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.VARCHAR(length=50), autoincrement=False, nullable=False))
        batch_op.drop_column('user_name')

    # ### end Alembic commands ###
